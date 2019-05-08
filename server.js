import app from './app'

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}`))