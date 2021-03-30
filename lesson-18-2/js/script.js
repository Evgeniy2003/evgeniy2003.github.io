document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.tabs-controls').forEach(function(tabsItem) {
		tabsItem.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.tabs-controls').forEach(function(tabControl) {
				tabControl.classList.remove('tabs-controls-active')
			})
			document.querySelector(`[data-path="${path}"]`).classList.add('tabs-controls-active')

			document.querySelectorAll('.tabs-panels-item').forEach(function(tabPanel) {
				tabPanel.classList.remove('tab-panels-active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('tab-panels-active')
			
		})
	})
})