module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define('tag', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tag_name: {
            type: Sequelize.STRING
        },
        tag_group_id: {
            type: Sequelize.INTEGER
        }
    });

    const TagGroup = require('../models/taggroup.model.js')(sequelize, Sequelize);
    Tag.belongsTo(TagGroup, {foreignKey: 'tag_group_id', as: 'tag_group'});
    // TagGroup.hasMany(Tag);

    return Tag;
}
