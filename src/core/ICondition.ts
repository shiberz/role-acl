

import { IDictionary } from './IDictionary'
/**
 *  An interface that defines condition for an access grant.
 *  @interface
 *
 *  @author Dilip Kola <dilip@tensult.com>
 */

export interface IStandardCondition {
    Fn: string;
    args: string | string[] | IDictionary<any> | IStandardCondition | IStandardCondition[];
}

export interface IFunctionCondition {
    (context: any): boolean;
}

export type ICondition = IStandardCondition | IFunctionCondition;