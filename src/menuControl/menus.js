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
      type: 1,
      components: [{
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
                        custom_id: 'Cas'
                    },
                    {
                        type: 2,
                        label: 'Trials',
                        style: 3,
                        custom_id: 'Comp'
                    },
                ]
    },
                  {
                    type: 1,
                    components: [{
                      type: 2,
                      label: 'Main Menu',
                      style: 2,
                      custom_id: "toMainMenu"
                    }]
                  }],




  
  raidMenu: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Last Wish',
                        style: 1,
                        custom_id: 'LW'
                    },
                    {
                        type: 2,
                        label: 'Garden of Salvation',
                        style: 1,
                        custom_id: 'GOS'
                    },
                    {
                        type: 2,
                        label: 'Deep Stone Crypt',
                        style: 1,
                        custom_id: 'DSC'
                    },
                    {
                        type: 2,
                        label: 'Vault of Glass',
                        style: 1,
                        custom_id: 'VOG'
                    },
                    {
                        type: 2,
                        label: 'Vow of the Disciple',
                        style: 1,
                        custom_id: 'VOTD'
                    }
                ]
            },
            {
               type: 1,
                 components: [{
                 type: 2,
                 label: 'Back',
                 style: 2,
                 custom_id: 'newPostMenu'
               }]
             }],
  
  
  strikeMenu: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Adept',
                        style: 1,
                        custom_id: 'Adept'
                    },
                    {
                        type: 2,
                        label: 'Hero',
                        style: 1,
                        custom_id: 'Hero'
                    },
                    {
                        type: 2,
                        label: 'Legend',
                        style: 1,
                        custom_id: 'Legend'
                    },
                    {
                        type: 2,
                        label: 'Master',
                        style: 1,
                        custom_id: 'Master'
                    },
                    {
                        type: 2,
                        label: 'GM',
                        style: 1,
                        custom_id: 'GM'
                    }
                ]
            },
              {
               type: 1,
                 components: [{
                 type: 2,
                 label: 'Back',
                 style: 2,
                 custom_id: 'newPostMenu'
               }]
             }],
  
  
  casMenu: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Control',
                        style: 4,
                        custom_id: 'Control'
                    },
                    {
                        type: 2,
                        label: 'Clash',
                        style: 4,
                        custom_id: 'Clash'
                    },
                    {
                        type: 2,
                        label: '3 Player Casual',
                        style: 4,
                        custom_id: '3Player'
                    },
                    {
                        type: 2,
                        label: 'Weekly Special',
                        style: 4,
                        custom_id: 'Weekly'
                    },
                    {
                        type: 2,
                        label: 'Iron Banner',
                        style: 3,
                        custom_id: 'IB'
                    }
                ]
            },
           {
               type: 1,
                 components: [{
                 type: 2,
                 label: 'Back',
                 style: 2,
                 custom_id: 'newPostMenu'
               }]
             }],

  
  compMenu: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Survival',
                        style: 4,
                        custom_id: 'Survival'
                    },
                    {
                        type: 2,
                        label: 'Trials (farm)',
                        style: 4,
                        custom_id: 'Farming'
                    },
                    {
                        type: 2,
                        label: 'Trials (Flawless)',
                        style: 4,
                        custom_id: 'Flawless'
                    }
                ]
            },
             {
               type: 1,
                 components: [{
                 type: 2,
                 label: 'Back',
                 style: 2,
                 custom_id: 'newPostMenu'
               }]
             }
             ],


  strikeMenu2: [{
    type: 1,
    components: [{
      type: 3,
      custom_id: "strikeSelect",
      placeholder: "Select a Strike",
      options: [{
        label: "Strike 1",
        description: "Planet/Location",
        value: "strike1"
      },
                {
        label: "Strike 2",
        description: "Planet/Location",
        value: "strike2"
      },
                {
        label: "Strike 3",
        description: "Planet/Location",
        value: "strike3"
      },
                
               ]
      
    }]
  }]


  
}