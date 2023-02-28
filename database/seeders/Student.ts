import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from "App/Models/Student";

export default class extends BaseSeeder {
  public async run() {
    await Student.createMany([
      {
        name: 'kinjo',
        code: 's21010'
      },
      {
        name: 'hamamura',
        code: 's21022'
      },
      {
        name: 'yosiya',
        code: 's21023'
      }
    ])
  }
}
