import db from "../models";

const { Album } = db;
export default class SingleService {
  static createSingle(single: any): Boolean {
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
