import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { DotFn } from '@/i18n/TranslationUtils';
import { sendRes } from '@/commonSimpleRoutes';
import { isDevEnv } from '@/web2share-copy/env';
import _ from 'lodash';
import shelljs from 'shelljs'
import { getLafToolsDataDir, getLafToolsExtDir } from '@/web2share-copy/homedir';
import path from 'path';
import fs from 'fs';
import pinyin from 'pinyin';
import { logger } from '@/utils/logger';

const currentProjectRoot = getLafToolsExtDir()

export type ExtModeSt = {
  isDev: boolean;
  repoPath: string;
}
export type MiaodaConfig = {
  mode: string;
  id: string;
  version: string;
  logo: string;
  name: string;
  shortDesc: string;
  description: string;
  development: {
    entryLink: string;
  };
  menus: string;
  init: {
    dev: string;
    build: string;
  };
  start: {
    dev: string;
    build: string;
  };
  keywords?: string[];
  include: string[];
  // post-process
  fuzzySearchStr?: string;
};
export type ExtMetaInfo = {
  totals: number;
  lastUpdated: string;
  allMetaInfo: MiaodaConfig[];
};
export type ExtMetaSearchReq = {
  searchText: string
}

export const getExtMode = (): ExtModeSt => {
  return {
    isDev: isDevEnv(),
    repoPath: currentProjectRoot,
  };
};



export const getAllExtMetaInfo = (req: ExtMetaSearchReq): ExtMetaInfo => {
  const projectRoots = shelljs.ls(currentProjectRoot);
  let results: MiaodaConfig[] = [];
  let lastUpdated = new Date().getTime();
  for (let eachFile of projectRoots) {
    logger.info('loading ext: ' + eachFile);
    const miaodaJSON = path.join(currentProjectRoot, eachFile, 'miaoda.json');
    if (fs.existsSync(miaodaJSON)) {
      const miaoda = JSON.parse(fs.readFileSync(miaodaJSON).toString()) as MiaodaConfig;
      const keywords = miaoda.keywords;
      const fuzzySearchStrArr = [];
      const addToFuzzy = (arr: string[]) => {
        for (let eachKeyword of arr) {
          if (!eachKeyword) {
            continue;
          }
          const pinyinStr = pinyin(eachKeyword, {
            style: pinyin.STYLE_NORMAL,
          }).join('');
          if (eachKeyword !== pinyinStr) {
            fuzzySearchStrArr.push(pinyinStr);
          }
          fuzzySearchStrArr.push(eachKeyword);
        }
      };
      addToFuzzy(keywords);
      addToFuzzy([miaoda.name, miaoda.shortDesc]);
      miaoda.fuzzySearchStr = _.toLower(fuzzySearchStrArr.join(' '));
      results.push(miaoda)
    }
  }
  // filter now
  req.searchText = _.trim(req.searchText);
  if (req.searchText) {
    const lowTxt = req.searchText.toLowerCase().trim()
    results = results.filter((each) => {
      return each.fuzzySearchStr.indexOf(lowTxt) >= 0;
    })
  }
  return {
    allMetaInfo: results,
    totals: results.length,
    lastUpdated: lastUpdated + '',
  };
};

export class ExtensionRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/ext/check-ext-mode', (req, res) => {
      sendRes(res, {
        data: getExtMode(),
      });
    });
    this.router.get('/ext/get-ext-list', (req, res) => {
      const allMetaInfo = getAllExtMetaInfo(req.query as ExtMetaSearchReq)

      sendRes(res, {
        data: allMetaInfo,
      });
    });
  }
}