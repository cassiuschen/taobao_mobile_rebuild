window.UI = 
	init: ->
		$('.notification>.close').on 'click', ->
			$('.notification')
				.remove()

$ ->
	window.UI.init()