module.exports = {

  
 mainMenuDisabled: [{
    type: 1,
    components: [{
            type: 2,
            label: 'Create LFG Post',
            style: 1,
            custom_id: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current LFG Posts',
            style: 2,
            custom_id: 'viewPostMenu',
            disabled: true
        },
        {
            type: 2,
            label: 'Delete LFG Post',
            style: 4,
            custom_id: 'removePostMenu',
            disabled: true
        }
    ]
}],


  
 mainMenuActive : [{
    type: 1,
    components: [{
            type: 2,
            label: 'Create LFG Post',
            style: 1,
            custom_id: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current LFG Posts',
            style: 2,
            custom_id: 'viewPostMenu',
        },
        {
            type: 2,
            label: 'Delete LFG Post',
            style: 4,
            custom_id: 'removePostMenu',
        }
    ]
}],



    newPostMenu: [{
                        type: 2,
                        label: 'Raid',
                        style: 3,
                        custom_id: 'Raid'
                    },
                    {
                        type: 2,
                        label: 'Strikes/Nighfalls',
                        style: 3,
                        custom_id: 'Strike'
                    },
                    {
                        type: 2,
                        label: 'Casual PVP',
                        style: 3,
                        custom_id: 'PVP'
                    },
                    {
                        type: 2,
                        label: 'Trials',
                        style: 3,
                        custom_id: 'Trials'
                    }
                ]


  
}