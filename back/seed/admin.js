const User = require("../models/User");
const chalk = require("chalk");

User.create({
  name: "admin",
  email: "admin@admin",
  password: "admin",
  userType: "admin"
}).then(user =>
  console.log(
    chalk.red(
      `${chalk.bgRed(chalk.green("SUPERUSER"))} named ${
        user.name
      } succesfully created with ${user.userType} privileges
      + ${chalk.green(JSON.stringify(user))}`
    )
  )
);
