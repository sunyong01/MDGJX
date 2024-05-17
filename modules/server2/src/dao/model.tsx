import {
    Sequelize, DataTypes, Model, InferCreationAttributes, InferAttributes, CreationOptional
} from 'sequelize';
import { DaoRef } from './index'
import { isDevEnv } from '../hooks/env';
import _ from 'lodash';
import { logger } from '@/utils/logger';

const UPDATE_TIME_VERSION = '14'

// provide user model, including user id, name, email, phoneNumber, password, createdAt, updatedAt, deleteAt
export class S2User extends Model<InferAttributes<S2User>, InferCreationAttributes<S2User>> {
    declare id?: number;
    declare name: string;
    declare email: string;
    declare phoneNumber: string;
    declare verified: number; // 1->verified, 0->not verified
    declare password: string; // md5 + salt
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2TranslationRecord extends Model<InferAttributes<S2TranslationRecord>, InferCreationAttributes<S2TranslationRecord>> {
    // sourceLang, targetLang, textCount, userId
    declare id?: number;
    declare status: number; // 0 -> not translated, 1 -> translated
    declare sourceLang: string;
    declare targetLang: string;
    declare handleType: string; // json or text
    declare cachedText: string; // it will be cleaned regualry in the background
    declare processedText: string; // it will be cleaned regualry in the background
    declare errorText: string; // it will be cleaned regualry in the background
    declare textCount: number;
    declare userId: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2UserPurchaseItem extends Model<InferAttributes<S2UserPurchaseItem>, InferCreationAttributes<S2UserPurchaseItem>> {
    declare id?: number;
    declare userId: number;
    declare type: string;
    declare purchaseDays: number;
    declare purchaseDevices: number;
    declare purchaseCNY: number;
    declare purchaseUSD: number;
    declare purchaseDate: Date;
    declare userRemark: string;
    declare systemRemark: string;
    declare orderCode: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2Feedback extends Model<InferAttributes<S2Feedback>, InferCreationAttributes<S2Feedback>> {
    // email, subject(TEXT), content(TEXT), createdAt, updatedAt, deleteAt
    declare id?: number;
    declare email: string;
    declare subject: string;
    declare content: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2UserMembership extends Model<InferAttributes<S2UserMembership>, InferCreationAttributes<S2UserMembership>> {
    declare id?: number;
    declare userId: number;
    declare lifelong: number; // 1->lifelong, 0->not lifelong
    declare totalDays: number;
    declare whenToStart: Date;
    declare whenToExpire: Date;
    declare systemRemark: string;
    declare sourceType: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2GiftCard extends Model<InferAttributes<S2GiftCard>, InferCreationAttributes<S2GiftCard>> {
    declare id?: number;
    declare giftCardCode: string;
    declare giftCardType: string;
    declare totalDays: number;
    declare remarks: string;
    declare usedByWho: number; // userId
    declare sourceType: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class S2UserHasGiftCardList extends Model<InferAttributes<S2UserHasGiftCardList>, InferCreationAttributes<S2UserHasGiftCardList>> {
    declare id?: number;
    declare userId: number;
    declare giftCardCode: string;
    declare thanksToFundrasingDate: string;
    declare thanksReasonType: "PURCHASE" | "SEED_USER";
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}



export default async (daoRef: DaoRef) => {

    // define model for s2
    let db_s2 = daoRef.db_s2

    await S2TranslationRecord.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        handleType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        processedText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        errorText: {
            allowNull: true,
            type: DataTypes.STRING
        },
        cachedText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sourceLang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        targetLang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        textCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_translation_record',
        timestamps: true,
        paranoid: true,
        underscored: true
    })

    await S2User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        verified: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_user',
        timestamps: true,
        paranoid: true,
        underscored: true
    })

    await S2UserPurchaseItem.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        purchaseDays: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchaseDevices: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchaseCNY: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        purchaseUSD: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userRemark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        systemRemark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_user_purchase_item',
        timestamps: true,
        paranoid: true,
        underscored: true
    })
    await S2Feedback.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_feedback',
        timestamps: true,
        paranoid: true,
        underscored: true
    })
    await S2UserMembership.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lifelong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalDays: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        whenToStart: {
            type: DataTypes.DATE,
            allowNull: false
        },
        whenToExpire: {
            type: DataTypes.DATE,
            allowNull: false
        },
        systemRemark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sourceType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_user_membership',
        timestamps: true,
        paranoid: true,
        underscored: true
    })

    await S2GiftCard.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        giftCardCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 50
            }
        },
        giftCardType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalDays: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usedByWho: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sourceType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_gift_card',
        timestamps: true,
        paranoid: true,
        underscored: true
    })

    await S2UserHasGiftCardList.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thanksToFundrasingDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thanksReasonType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        giftCardCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: db_s2,
        modelName: 's2_user_has_gift_card_list',
        timestamps: true,
        paranoid: true,
        underscored: true
    })


    // version check
    let S2_KEY_SAVE_VALUE = 's2_version'
    let [_s2_version_rows] = await daoRef.db_work7z.query(`select * from G_SYSTEM_CONFIG gsc where KEYNAME='${S2_KEY_SAVE_VALUE}' `)
    let s2_version_rows = _s2_version_rows as any
    let default_version = '0'
    let s2_version = default_version;
    if (_.isEmpty(s2_version_rows)) {
        await daoRef.db_work7z.query(`insert into G_SYSTEM_CONFIG (KEYNAME, KEYVALUE) values ('${S2_KEY_SAVE_VALUE}', '${default_version}')`)
        s2_version = default_version
    } else {
        s2_version = s2_version_rows[0].KEYVALUE as any
    }

    if (parseInt(s2_version) < parseInt(UPDATE_TIME_VERSION)) {
        logger.info("s2 version will be updated")
        await daoRef.db_s2.sync({ alter: true, force: false })
        // update it
        await daoRef.db_work7z.query(`update G_SYSTEM_CONFIG set KEYVALUE='${UPDATE_TIME_VERSION}' where KEYNAME='${S2_KEY_SAVE_VALUE}'`)
    } else {
        logger.info("s2 version is up to date")
    }

}