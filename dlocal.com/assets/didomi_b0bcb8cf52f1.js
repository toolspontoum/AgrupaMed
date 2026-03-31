// * =======================================
// * MAIN
// * =======================================

// ! Debuggers

let debugDidomi = {
    vendors: false,
    purposes: false,
    consents: false,
    inits: false,
}

// ! Vendor Inits

const vendors = {
    // Google Advertising Products
    'google-ads': {
        id: 'google',
        didomiId: 'google',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ){
                console.log('🧡 Vendor Init: Google Advertising Products')
                console.warn('%cFired through GTM. Check Tag Assistant to ensure is firing correctly.','font-style:italic;color:grey')
            }
        },
    },
    // Google Analytics Products
    'google-analytics': {
        id: 'googleana-4TXnJigR',
        didomiId: 'c:googleana-4TXnJigR',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ){
                console.log('🧡 Vendor Init: Google Analytics Products')
                console.warn('%cFired through GTM. Check Tag Assistant to ensure is firing correctly.','font-style:italic;color:grey')
            }
        },
    },
    // HubSpot, Inc.
    'hubspot-track': {
        id: 'hubspot',
        didomiId: 'c:hubspot',
        debug: false,
        trigger: () => {
            triggerHubspot()
        },
    },
    // Hubspot Forms
    'hubspot-forms': {
        id: 'hubspot-forms',
        didomiId: 'c:hubspot-forms',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ){
                console.log('✅ Vendor Init: Hubspot Forms')
                console.warn('%cNo initialize JavaScript needed.','font-style:italic;color:grey')
            }
        },
    },
    // Hubspot Chartflows
    'hubspot-chat': {
        id: 'hubspotch-rTbZeYhn',
        didomiId: 'c:hubspotch-rTbZeYhn',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ){
                console.log('✅ Vendor Init: Hubspot Chartflows')
                console.warn('%cNo initialize JavaScript needed.','font-style:italic;color:grey')
            }
        },
    },
    // Dlocal
    'dlocal': {
        id: 'bloque-dlocal',
        didomiId: 'c:bloque-dlocal',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ) console.log('✅ Vendor Init: Dlocal')
        },
    },
    // LinkedIn Ireland Unlimited Company
    'linkedin': {
        id: 'linkedin-ZtrLMW7M',
        didomiId: '804',
        debug: false,
        trigger: () => {
            if( debugDidomi.inits ){
                console.log('🧡 Vendor Init: LinkedIn Ireland Unlimited Company')
                console.warn('%cFired through GTM. Check Tag Assistant to ensure is firing correctly.','font-style:italic;color:grey')
            }
        },
    },
    // Apollo.io
    'apollo': {
        id: 'bloque-apollo',
        didomiId: 'c:bloque-apollo',
        debug: false,
        trigger: () => {
            triggerApollo()
        },
    },
    // Apollo.io
    'baidu': {
        id: 'baiduusa-NT8Ea4Z3',
        didomiId: '1020',
        debug: false,
        trigger: () => {
            triggerBaidu()
        },
    },
}

function didomiVendorInit( internalId ){
    // console.log(`%c⏳ Running vendor's triggering script`,'color:darkorange')

    // ! Trigger Specific or All
    
    if( internalId ) {
        // ! If internal ID is specified, trigger only that
        
        if ( internalId in vendors ) { // "key" in Object
            vendors[internalId].trigger()
        } else {
            // if Vendor's internal ID does not exists
            console.error(`Trigger for '${internalId}' not found`)
        }

    } else {
        
        // ! If empty ID trigger all
        for( internalId in vendors ) {
            vendors[internalId].trigger()
        }
        
    }

}

// ! Didomi Listener

window.didomiOnReady = window.didomiOnReady || []
window.didomiOnReady.push(function (Didomi) { 
    if( debugDidomi.inits ) console.log('%c🚀 Didiomi is initialized', 'font-weight:bold;color:limegreen;')

    // ! If consent not required, fire all
    if (!Didomi.isConsentRequired()) return didomiVendorInit()

    // ! Continue with Didomi's consent
    window.didomiEventListeners = window.didomiEventListeners || []

    document.getElementById('show-consent-btn').style.display = 'block'

    // ! Check if Consent is already provided
    // 1. Get Enabled Vendors
    didomiCheckEnabledVendors()
    // 2. Fire Enabled Vendors after getting them
          // Inside didomiCheckEnabledVendors()
    
    // ! Add listeners for Consent Inputs
    // 1. Listen to Any consent changes: Agree All, Disagree All, Partial selection on Save
    window.didomiEventListeners.push({
        event: 'consent.changed',
        listener: function (context) {
            if( debugDidomi.consents ) console.log('Consents:', context.consentToken.consents)
            
            didomiCheckEnabledVendors()
        }
    })
    // 2. Fire Enabled Vendors after getting them
          // Inside didomiCheckEnabledVendors()

}) // DidomiOnReady


// * =======================================
// * HELPERS
// * =======================================

// ! Check and Fire Enabled Vendors

function didomiCheckEnabledVendors(){

    if( debugDidomi.inits ) console.log('%c⏳ Checking for enabled vendors','color:blue;font-style:italic')

    // Get dataLayer's enabled vendors
    let enabledVendors = window.didomiState.didomiVendorsEnabled.split(',')
    // Get rid of empty values
    if( enabledVendors ) enabledVendors = enabledVendors.filter(vendor => (vendor !== "" && vendor !== " "))

    // Simplify Didomi's vendor ids to use is in the vendors Object
    enabledVendors.forEach( (vendor, i) => {
        if( vendor === 'google' ) { enabledVendors[i] = 'google-ads' }
        else if( vendor.indexOf('googleana') !== -1 ) { enabledVendors[i] = 'google-analytics' }
        else if( enabledVendors[i] === 'hubspot' ) { enabledVendors[i] = 'hubspot-track' }
        // else if( enabledVendors[i] === 'hubspot-forms' ) { enabledVendors[i] = 'hubspot-forms' }
        else if( vendor.indexOf('hubspotch') !== -1 ) { enabledVendors[i] = 'hubspot-chat' }
        else if( vendor.indexOf('dlocal') !== -1 ) { enabledVendors[i] = 'dlocal' }
        else if( vendor.indexOf('apollo') !== -1 ) { enabledVendors[i] = 'apollo' }
        else if( vendor.indexOf('linkedin') !== -1 ) { enabledVendors[i] = 'linkedin' }
        else if( vendor.indexOf('baidu') !== -1 ) { enabledVendors[i] = 'baidu' }
    }) // forEach enabledVendors
    
    
    if( debugDidomi.vendors ) console.log(`Enabled Vendors:`, enabledVendors)

    // * This script should be here because for Didomi if any purpose attached to Hubspot is denied, it will block the whole vendor
    // * But Hubspot has a Granular consent, which should be checked always. Unless the vendor is blocked directly through the Partners' modal
    // * > Hubspot check End
        // Check if Hubspot vendor is not Blocked at a Vendor level
        const hubspotIsEnabled = Didomi.getUserStatusForVendor( vendors['hubspot-track'].didomiId ) ? true : false

        if( hubspotIsEnabled ) {
            // If hubspot is not on the enabledVendors Array, add it to trigger its granular consent later
            if( enabledVendors.indexOf('hubspot-track') === -1 ) enabledVendors[enabledVendors.length] = 'hubspot-track'
        } else {
            // Disable it from datalayer
            hubspotDisable({
                analytics: false,
                advertisement: false,
                functionality: false,
            })
        }
    // * > Hubspot check End

    // Return if no vendors found (Solves js error when no selection is given)
    if( !enabledVendors?.length ) return console.log( '❌ No Enabled Vendors' )

    // Follow enabled vendors and trigger them
        
    if( debugDidomi.inits ) console.log(`%c✏️ Running vendor's triggering script`,'color:darkorange;font-style:italic')
    enabledVendors.forEach( val => {
        if (val && val !== '') didomiVendorInit( val )
    })

} // didomiCheckEnabledVendors


// * =======================================
// * VENDOR TRACKERS
// * =======================================

function triggerApollo() {
    if( debugDidomi.inits ) console.log('✅ Vendor Init: Apollo.io')
    var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"663120b136605c0300c431d2"})},document.head.appendChild(o)
} // triggerApollo

function triggerBaidu() {
    if( debugDidomi.inits ) console.log('✅ Vendor Init: Baidu')
    var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?cb59a745ada04f6d0d02831f6675ad64";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();
} // triggerBaidu

// ! Hubspot Tracking

function triggerHubspot() {
    // 1. Check if Hubspot is not blocked
    // 2. Define Category / Purpose relationship
    // 3. Loop through Purposes and set the category's enavbled status
    // 4. Push categories' values to Hubspot's dataLayer    

    if( !Didomi.isConsentRequired() ) return (() => {
        window._hsp = window._hsp || []
        window._hsp.push(['setHubSpotConsent',
            {
                analytics: true,
                advertisement: true,
                functionality: true,
            },
        ])
        if( debugDidomi.inits ) console.log('✅ Vendor Init: HubSpot Tracking: All categories')
    })()

    // Return if Vendor is blocked
    if( !Didomi.getUserStatusForVendor( vendors['hubspot-track'].didomiId ) ) return console.log( '❌ Hubspot Tracking not authorized' )

    // Get enabled Purposes
    const enabledPurposes = window.didomiState.didomiPurposesConsent.split(',')
    
    if( debugDidomi.purposes )console.log(`Enabled Purposes:`, enabledPurposes)
    
    // HS Category / Purpose relation
    const categories = {
        analytics: {
            enabled: false,
            purposesIds: [
                'cookies', // Store and/or access information on a device
                'create_content_profile', // Create profiles to personalise content
                'measure_content_performance', // Measure content performance
                'select_personalized_content', // Use profiles to select personalised content
                'market_research', // Understand audiences through statistics or combinations of data from different sources
            ]
        },
        advertisement: {
            enabled: false,
            purposesIds: [
                'cookies', // Store and/or access information on a device
                'create_ads_profile', // Create profiles for personalised advertising
                'measure_ad_performance', // Measure advertising performance
                'select_basic_ads', // Use limited data to select advertising
                'select_personalized_ads', // Use profiles to select personalised advertising
            ]
        },
        functionality: {
            enabled: false,
            purposesIds: [
                'cookies', // Store and/or access information on a device
                'improve_products', // Develop and improve services
            ]
        },
    }

    // Check enabled Categories
    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey]

        // Check if all purposes in the category are enabled
        const allPurposesEnabled = category.purposesIds.every(purpose => enabledPurposes.includes(purpose))

        // Update the category's enabled status
        category.enabled = allPurposesEnabled
    })

    // Push each categories' consent to Hubspot's datalayer
    window._hsp = window._hsp || []
    window._hsp.push(['setHubSpotConsent',
        {
            analytics: categories.analytics.enabled,
            advertisement: categories.advertisement.enabled,
            functionality: categories.functionality.enabled,
        },
    ])

    if( debugDidomi.inits ) {
        if ( categories.analytics.enabled )  console.log('✅ Vendor Init: HubSpot Tracking: Analytics')
        if ( categories.advertisement.enabled )  console.log('✅ Vendor Init: HubSpot Tracking: Advertisement')
        if ( categories.functionality.enabled )  console.log('✅ Vendor Init: HubSpot Tracking: Functionality')
    }

} // triggerHubspot

if( vendors['hubspot-track'].debug ) {
    window._hsp = window._hsp || []
    _hsp.push([
        'addPrivacyConsentListener',
        function (consent) {
            console.log('%c🔊 Hubspot Consent Push:','color:#cb00e1;font-weight:700')
            console.table('%cAnalytics:', 'color:#cb00e1', consent.categories.analytics)
            console.table('%cAdvertisement:', 'color:#cb00e1', consent.categories.advertisement)
            console.table('%cFunctionality:', 'color:#cb00e1', consent.categories.functionality)
        }
    ])
}

function hubspotDisable(categories) {
    if( vendors['hubspot-track'].debug ) console.log('%cHubspot: Disabling categories...','font-style:italic')
    window._hsp = window._hsp || []
    window._hsp.push(['setHubSpotConsent',
        {
            analytics: categories.analytics,
            advertisement: categories.advertisement,
            functionality: categories.functionality,
        },
    ])

}


