"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class Single extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Single.init(
    {
      title: DataTypes.STRING,
      img_url: DataTypes.STRING,
      public_id: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Single",
    }
  );
  return Single;
};
