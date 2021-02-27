import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface studentsAttributes {
  id: number;
  full_name?: string;
  born_date?: string;
  performance?: number;
}

export type studentsPk = "id";
export type studentsId = students[studentsPk];
export type studentsCreationAttributes = Optional<studentsAttributes, studentsPk>;

export class students extends Model<studentsAttributes, studentsCreationAttributes> implements studentsAttributes {
  id!: number;
  full_name?: string;
  born_date?: string;
  performance?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof students {
    students.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    born_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    performance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 => неудовлетворительно, 1 => удовлетворительно, 2 => хорошо, 3 => отлично"
    }
  }, {
    sequelize,
    tableName: 'students',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "students_performance_idx",
        fields: [
          { name: "performance" },
        ]
      },
      {
        name: "students_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return students;
  }
}
