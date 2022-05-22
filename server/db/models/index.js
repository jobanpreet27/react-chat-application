const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Group = require("./group");
// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
User.belongsToMany(Conversation, { through: Group });
Conversation.belongsToMany(User, { through: Group });

module.exports = {
  User,
  Conversation,
  Message,
  Group,
};
