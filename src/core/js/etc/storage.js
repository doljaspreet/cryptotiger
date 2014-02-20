Cryptocat.storage = {}

$(window).ready(function() {

// Cryptocat Storage API
// Removed - nobody wants to find your PC with super-secret nickname
// 	and super-secret lobby room and use those details to impersonate you.

Cryptocat.storage = (function() {
		return {
			setItem: function(key, val) {
			},
			getItem: function(key, callback) {
				callback('')
			},
			removeItem: function(key) {
			}
		}
	}
	)()


Cryptocat.locale.set('en')

Cryptocat.serverName = 'Cryptocat'
Cryptocat.xmpp.domain = 'crypto.cat'
Cryptocat.xmpp.conferenceServer = 'conference.crypto.cat'
Cryptocat.xmpp.relay = 'https://crypto.cat/http-bind'

// Load nickname settings.
$('#nickname').animate({'color': 'transparent'}, function() {
	$(this).val('')
	$(this).animate({'color': '#FFF'})
})

})
