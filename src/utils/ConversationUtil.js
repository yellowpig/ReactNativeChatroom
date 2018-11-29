import StorageUtil from './StorageUtil'

export default class ConversationUtil {
    //获取所有会话
    static getConversations(username, callback) {
        StorageUtil.get('conversations', (error, object) => {
            if (!error && object && object.conversations) {
                let result = object.conversations
                //用户名非null时为当前用户的会话
                if (username != null) {
                    //@TODO 会话如何存储
                    result = object.conversations
                }
                callback && callback(result)
            } else {
                let conversations = []
                StorageUtil.set('conversations', { 'conversations': conversations })
                callback(conversations)
            }
        })
    }

    //添加一条message
    static addMessage(message,callback){
        
    }
}