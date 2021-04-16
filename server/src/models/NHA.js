const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NHA', {
    THUTU_NHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: "UQ__NHA__A9654DEABF31F894"
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ID_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAIKHOAN',
        key: 'ID_TAIKHOAN'
      }
    },
    KHUTIEPTAN: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CHECKIN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CHECKOUT: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    KHOANGCACH_TRUNGTAMTP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SOTANG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PHUPHI_BUASANG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DIACHI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ID_BANGGIA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'BANGGIA',
        key: 'ID_BANGGIA'
      }
    }
  }, {
    sequelize,
    tableName: 'NHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__NHA__253B662CFA5981E3",
        unique: true,
        fields: [
          { name: "ID_NHA" },
        ]
      },
      {
        name: "UQ__NHA__A9654DEABF31F894",
        unique: true,
        fields: [
          { name: "THUTU_NHA" },
        ]
      },
    ]
  });
};
