const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

let users = [];

const authCookieName = 'token';


const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/ping', (req, res) => {
  res.json({ message: 'Server working!' });
});

apiRouter.post('/auth/create', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    
    const user = {
        email: email,
        passwordHash: passwordHash,
        id: uuid.v4(),
    };
    users.push(user);
    res.send({ email: user.email, message: 'User created successfully' });
});

apiRouter.post('/auth/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const validPassword = bcrypt.compareSync(password, user.passwordHash);
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = uuid.v4();
    user.token = token;
    res.cookie(authCookieName, token, 
      { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) });
    res.send({ email: user.email, message: 'Login successful' });
});

function verifyAuthToken(req, res, next) {
    const token = req.cookies[authCookieName];
    const user = users.find((user) => user.token === token);
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}
apiRouter.get('/customer', verifyAuthToken, (req, res) => {
    res.send({ data: 'Welcome to the Customer Portal!' });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



