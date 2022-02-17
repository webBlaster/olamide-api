import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      img_url: DataTypes.STRING,
      public_id: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Album",
    }
  );
  return Album;
};
