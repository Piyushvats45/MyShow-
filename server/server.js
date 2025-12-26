import express from 'express'

const app = express();
const port = process.env.PORT || 4000;

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173']

// MiddleWare configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials: true}))

app.get('/', (req,res) => res.send("API is Working"));

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`)
})