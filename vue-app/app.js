var app1 = new Vue({
	el: '#app-1',
	data:{
		message:'Hello World!'
	}
});

var app2 = new Vue({
	el:'#app-2',
	data:{
		message: 'You loaded this page on ' + new Date().toString()
	}
});

var app3 = new Vue({
	el:'#app-3',
	data:{
		seen: true
	}
});

var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
});

var app5 = new Vue({
	el:'#app-5',
	data:{
		message: 'Hello Vue.js!',
	},
	computed:{
		reversedMessage: function () {
			return this.message.split('').reverse().join('')
		}
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el:'#app-7',
	data:{
		groceryList:[
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
		]
	}
})

var obj = {
	foo: 'bar'
}

Object.freeze(obj)

var app8 = new Vue({
	el: '#app-8',
	data: obj,
	created: function () {
		console.log('foo is: ' + this.foo)
	}
})

var watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!',
		image: null
	},
	watch: {
		// whenever question changes, this function will run
		question: function (newQuestion, oldQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.debouncedGetAnswer()
		}
	},
	created: function () {
		// _.debounce is a function provided by lodash to limit how
		// often a particularly expensive operation can be run.
		// In this case, we want to limit how often we access
		// yesno.wtf/api, waiting until the user has completely
		// finished typing before making the ajax request. To learn
		// more about the _.debounce function (and its cousin
		// _.throttle), visit: https://lodash.com/docs#debounce
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
	},
	methods: {
		getAnswer: function () {
			if (this.question.indexOf('?') === -1) {
				this.answer = 'Questions usually contain a question mark. ;-)'
				return
			}
			this.answer = 'Thinking...'
			this.image = null
			var vm = this
			axios.get('https://yesno.wtf/api')
			.then(function (response) {
				vm.answer = _.capitalize(response.data.answer)
				vm.image = response.data.image
			})
			.catch(function (error) {
				vm.answer = 'Error! Could not reach the API. ' + error
			})
		}
	}
})

var app9 = new Vue({
	el:'#app-9',
	data:{
		checked: false
	}
})

var app10 = new Vue({
	el: '#app-10',
	data: {
		checkedNames: [],
	}
})

var app11 = new Vue({
	el: '#app-11',
	data:{
		picked: null,
	}
})

var app12 = new Vue({
	el: '#app-12',
	data: {
		selected: '',
		multielected: [],
		dyselected: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		]
	}
})

Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">\
	You clicked me {{ count }} times.</button>'
})

var app13 = new Vue({ 
	el: '#components-demo' 
})

Vue.component('blog-post', {
	props: ['title'],
	template: '<p>{{ title }}</p>'
})
new Vue({
	el: '#blog-post-demo',
	data: {
		posts: [
			{ id: 1, title: 'My journey with Vue' },
			{ id: 2, title: 'Blogging with Vue' },
			{ id: 3, title: 'Why Vue is so fun' }
		]
	}
})

Vue.component('blog-post2', {
	props: ['post'],
	template: `
	<div class="blog-post2">
	<p>{{ post.title }}</p>
	<button v-on:click="$emit('enlarge-text')">
	Enlarge text
	</button>
	<div v-html="post.content"></div>
	</div>
	`
})

new Vue({
	el: '#blog-posts-events-demo',
	data: {
		posts: [
			{ id: 1, title: 'My journey with Vue', content:'...content...' },
			{ id: 2, title: 'Blogging with Vue', content:'...content...' },
			{ id: 3, title: 'Why Vue is so fun', content:'...content...' }
		],
		postFontSize: 1
	}
})



