window.addEventListener('load', ->
	#alert('loaded')

	canvas = document.getElementById('canvas')
	canvas.width  = window.innerWidth  - 30
	canvas.height = window.innerHeight - 30

	ctx = canvas.getContext('2d')
	ctx.lineWidth = 5
	ctx.strokeStyle = '#9eala3'

	down = false
	canvas.addEventListener('mousedown', (e) ->
		down = true
		ctx.beginPath()
		ctx.moveTo(e.clientX, e.clientY)
	, false)

	window.addEventListener('mousemove', (e) ->
		if !down then return
		console.log(e.clientX, e.clientY)
		ctx.lineTo(e.clientX, e.clientY)
		ctx.stroke()
	, false)

	window.addEventListener('mouseup', (e) ->
		if !down then return
		ctx.lineTo(e.clientX, e.clientY)
		ctx.stroke()
		ctx.closePath()
		down = false
	, false)

	colors = document.getElementById('colors').childNodes
	for color,i in colors
		if color.nodeName.toLowerCase() != 'div' then continue
		color.addEventListener('click', (e) ->
			style = e.target.getAttribute('style')
			color = style.match(/background:(#......)/)[1]
			ctx.strokeStyle = color
		, false)
, false)

