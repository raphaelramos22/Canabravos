const createMemberModel = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id:{ type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    instagram: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Member'
  });
  return Member;
};

module.exports = createMemberModel