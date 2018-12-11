const db = require('../config/db')
const Sequelize = db.sequelize
const User = Sequelize.import('../schema/user.js')
 //User.sync({force: true});
const uuid = require('node-uuid');
class UserModel {
    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */
    static async create(user) {
        let {username, password} = user;
        let uid=uuid.v1();
        await User.create({
            username,
            password,
            id:uid
        })
        return true
    }

    /**
     * 删除用户
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await User.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 查询用户列表
     * @returns {Promise<*>}
     */
    static async findAllUserList() {
        return await User.findAll({
            attributes: ['id', 'username']
        })
    }

    /**
     * 查询用户信息
     * @param username  姓名
     * @returns {Promise.<*>}
     */
    static async findUserByName(username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }
    static async findUserById(id) {
        return await User.findOne({
            where: {
                id
            }
        })
    }
    /**
     * 修改用户信息
     * @param  user 
     */
    static async updateUserById(user){
        let values={
            ...user
        }
        console.log("values==",values);
        return await User.update(
            user,
            {
                where: {
                    id:user.id,
                },
                fields: ['username', 'email']
            }
        )
    }
}

module.exports = UserModel
