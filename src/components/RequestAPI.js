import React from 'react';

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: '',
            description: '',
            items: []
        };
    }

    componentDidMount() {
        fetch("https://reactnative.dev/movies.json")
        .then( res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    title: result.title,
                    description: result.description,
                    items: result.movies
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items, title, description } = this.state;
        if (error) {
            return <h5>Oops. {error.message}</h5>;
        } else if (!isLoaded) {
            return <h5>Loading...</h5>;
        } else {
            return (
                <div>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    <ul>
                        {items.map(movie => (
                            <li key={movie.title}>
                                {movie.title} <br />
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }

        
    }
}

export default ApiCall;