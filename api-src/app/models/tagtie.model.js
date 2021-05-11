module.exports = (sequelize, Sequelize) => {
    const TagTie = sequelize.define('tag_tie', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        object_id: {
            type: Sequelize.STRING
        },
        tag_id: {
            type: Sequelize.INTEGER
        }
    });

    const Tag = require('../models/tag.model.js')(sequelize, Sequelize);
    TagTie.belongsTo(Tag, {foreignKey: 'tag_id', as: 'tag'});
    // Tag.hasMany(TagTie, { as: 'tagties' });

    return TagTie;
}
