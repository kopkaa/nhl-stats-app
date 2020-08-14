const express = require('express')


const app = express();
app.use('/graphql', (req,res,next) => {
	res.sendStatus(200);
})

app.listen(3000);
// export default app => {
//   app.use('/files', express.static(path.resolve(__dirname, '../live/uploads')))
// }
