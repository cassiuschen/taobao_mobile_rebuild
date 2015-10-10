window.UI = 
	resize: ->
		_scale = 1
		_scale /= window.devicePixelRatio
		$('head').append "<meta name=\"viewport\" content=\"width=device-width, initial-scale=#{_scale}, maximum-scale=#{_scale}, user-scalable=no\">"
		_fontSize = $(document).width() / 10 + "px"
		console.log $(document).width()
		$('html').css 'font-size', _fontSize

	onFinishLoading: ->
		$('body').removeClass 'onload'
		$('.loader')
			.fadeOut(2000)
			#.remove()
		
	init: ->
		@resize()
		$('.notification>.close').on 'click', ->
			$('.notification')
				.remove()
		setTimeout ->
				window.UI.onFinishLoading()
			, 3000

$(document).ready ->
	window.UI.init()