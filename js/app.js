/** @jsx React.DOM */
(function () {
	'use strict';
	var Quiz = React.createClass({
		render() {
			return <div>
				{this.props.books.map( book => 
					<Book title={book} />
				)}
			</div>;
			}
		});

	var Book = React.createClass({
		render() {
			return  <div><h4>{this.props.title}</h4></div>;
		}
	})

	React.render(<Quiz books={["Lord of the rings", "The Iliad"]} />, document.getElementById('app'));
})();