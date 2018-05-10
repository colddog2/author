/** @jsx React.DOM */
(function () {
	'use strict';
	var Quiz = React.createClass({
		propTypes:{
			data: React.PropTypes.array.isRequired

		},	
		getInitialState: function() {

			return this.props.data.selectGame();
		},

		render() {
			return <div>
				<div className="row">
					<div className="col-md-4">
						<img src={this.state.author.imageUrl} className="authorimage" />
					</div>
					<div className="col-md-7">
						{this.state.books.map(function (b) {
							return <Book title={b}/>
						}, this)}			
					</div>

					<div className="col-md-1">
					
					</div>
				</div>
			</div>;
			}
	});

	var data = [{
		name: "Stephan King",
		imageUrl: "images/authors/stephanking.jpg",
		books: ["The Shining", "IT"]
	},{
		name: "J.K Rowling",
		imageUrl: "images/authors/jkrowling.jpg",
		books: ["Harry Potter"]
	},{
		name: "Charles Dickens",
		imageUrl: "images/authors/charlesdickens.jpg",
		books: ["David Copperfield", "A Tale of Two cities"]
	}];


	data.selectGame = function() {
		var books = _.shuffle(_.flatten(data.map (x => x.books))).slice(0,4);
		var answer = books[_.random(books.length-1)];
		var author = _.find(this, function(author) {
			return author.books.some(function(title) {
				return title === answer
			});
		});
		return {
			books,
			author 
		}


	}


	var Book = React.createClass({

		propTypes:{
			title: React.PropTypes.string.isRequired

		},	

		render() {
			return  <div className="answer"><h4>{this.props.title}</h4></div>;
		}
	})

	React.render(<Quiz data={data} />, document.getElementById('app'));
})();