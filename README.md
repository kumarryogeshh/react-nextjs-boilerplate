# React <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-32.png" width=32> + Next <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/9114856761551941711-256.png" width=32> = 🎉

Bolierplate code for building production ready [React](https://reactjs.irg) app using [Next.js](https://nextjs.org/).

Also contains CSS styling using [Semantic-UI-React](https://react.semantic-ui.com/)

Written by [Yogesh](https://twitter.com/igoy_k).

## Scripts

`npm run dev` Runs `next` which starts Next.js in development mode at http://localhost:3000.  
`npm run build` Runs `next` build which builds the application for production usage.
`npm start` Runs next start which starts a Next.js production server

## Notes

To start developing your application run `npm run dev`. This starts the development server on http://localhost:3000.

Visit http://localhost:3000 to view your application.

So far, we get:

Automatic compilation and bundling (with webpack and babel)
Hot code reloading
Static generation and server-side rendering of ./pages/
Static file serving. ./public/ is mapped to /

## Using PM2

#### for development

`pm2 start npm --name "your-app-name" -- run dev`

##### for production

`npm run build pm2 start npm --name "your-app-name" -- start`

## Read more

You can follow me on [Medium](https://medium.com/@yogeshkumarr/).

## License

This code is released under the [MIT License](LICENSE).
