const Path = require('path');
const Note = require('./controllers/note')
//Home es el nombre usado después en el handler de la ruta
const Home = require('./controllers/home');
module.exports = [
	// Aquí definiremos las rutas
    {
        method: 'GET',
            path: '/',
            handler: Home,
            config: {
                description: 'Gets all the notes available'
            }
    },
    {
        method: 'POST',
        path: '/note',
        handler: Note.create,
        config: {
            description: 'Adds a new note'
        }
    },
    {
        method: 'GET',
        path: '/note/{slug}',
        handler: Note.read,
        config: {
            description: 'Gets the content of a note'
        }
    },
    {
        method: 'PUT',
        path: '/note/{slug}',
        handler: Note.update,
        config: {
            description: 'Updates the selected note'
        }
    },
    {
        method: 'DELETE',
        path: '/note/{slug}',
        handler: Note.delete,
        config: {
            description: 'Deletes the selected note'
        }
    },
    {
        // Static files
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: Path.join(__dirname, '../static/public'),
          },
        },
        config: {
          description: 'Provides static resources',
        },
    },
    {
        method: 'GET',
        path: '/note/{slug}/delete',
        handler: Note.deleteGet,
        config: {
          description: 'Deletes the selected note',
        },
    },
];