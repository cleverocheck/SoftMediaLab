import type { Sequelize, Model } from "sequelize";
import { students } from "./students";
import type { studentsAttributes, studentsCreationAttributes } from "./students";

export {
  students,
};

export type {
  studentsAttributes,
  studentsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  students.initModel(sequelize);


  return {
    students: students,
  };
}
