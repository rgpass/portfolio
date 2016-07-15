# Portfolio

I wanted to make a portfolio site that better showcased my skills and could display my personality.

# Starting the Server

* Install node packages: `$ npm install`
* Set up environment variables in `.env`

```
NODE_ENV=development
PORT=3000
```

* Start the server with foreman: `$ nf start dev=1`
  * Can simulate the web environment: `$ nf start web=1`
* Start watch processes: `$ gulp serve`

# File Organization

Although the componentized architecture is much cleaner, for smaller apps it adds a lot of overhead. Thus, I went with a flat architecture.

# Custom and Vanilla

Rather than using frameworks or libraries, I wanted to showcase my skills by doing everything custom and with vanilla JS.
