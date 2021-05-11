module.exports = (sequelize, Sequelize) => {
    const TagGroup = sequelize.define('tag_group', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tag_group_name: {
            type: Sequelize.STRING
        }
    });

    return TagGroup;
}
