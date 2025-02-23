const express = require('express');
const path = require('path');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { typeDefs, resolvers } = require('./schema');

require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    try {
        await server.start();

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        app.use('/graphql', expressMiddleware(server));

        if(process.env.NODE_ENV === 'production') {
            app.use(express.static(path.join(__dirname, '../client/dist')));

            app.get('*', (req, res) => {
                res.sendFile(path.join(__dirname, '../client/dist/index.html'));
            });
        }

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    } catch (err) {
        console.error('Failed to start Apollo Server:', err);
    }
};

startApolloServer();