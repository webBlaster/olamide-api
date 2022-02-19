import db from "../models";

const { Single } = db;
export default class SingleService {
  static createSingle(single: any): Boolean {
    Single.create({});
    return true;
  }

  static getSingle(id: string): any {
    return {};
  }

  static deleteSingle(id: string): Boolean {
    return true;
  }

  static getAllSingles(): any[] {
    return [];
  }
}
