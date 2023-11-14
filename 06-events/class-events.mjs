import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your post`);
        });
        this.on('error', (error) => {
            console.error(error);
        });
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request')
            );
        }
        this.likesQty++;
        this.emit('likePost', username);
    }
}

const myPost = new Post('William', 'My great post');

myPost.like('Alice');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Alex'), 2000);

setTimeout(() => console.log(myPost.likesQty), 2500);
