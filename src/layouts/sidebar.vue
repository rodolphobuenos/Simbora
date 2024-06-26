<script setup lang="ts">
import type { SidebarItem } from '/@src/components/layouts/sidebar/sidebar.types'

const links = ref<SidebarItem[]>(
  [
    {
      id: 'dashboard',
      label: 'Dashboards',
      icon: 'lucide:activity',

      type: 'subsidebar',
      subsidebar: {
        label: 'Dashboards',
        items: [
          {
            type: 'collapse',
            id: 'personal',
            label: 'Personal',
            children: [
              {
                label: 'Personal V1',
                to: '/sidebar/dashboards',
                icon: 'lnil lnil-analytics-alt-1',
              },
              {
                label: 'Personal V2',
                to: '/sidebar/dashboards/personal-2',
                icon: 'lnil lnil-pie-chart',
              },
              {
                label: 'Personal V3',
                to: '/sidebar/dashboards/personal-3',
                icon: 'lnil lnil-stats-up',
              },
            ],
          },
          

    
        ],
      },
    },
    {
      id: 'simbora',
      label: 'Simbora PH',
      icon: 'lucide:rocket',

      type: 'subsidebar',
      subsidebar: {
        label: 'Simbora PH',
        items: [
          {
            type: 'collapse',
            label: 'Simbora',
            to: '/app/simbora/novo/',
            icon: 'lnil lnil-house',
            children: [
              {
                label: 'Nova digitação',
                to: '/app/simbora/operacao/novaDigitacao',
                icon: 'lnil lnil-plus',
              },
              {
                label: 'Esteira de produção',
                to: '/app/simbora/operacao/esteira',
                icon: 'lnil lnil-list',
              }
            ],
          },
          {
            type: 'collapse',
            id: 'configuracoes',
            label: 'Configurações',
            children: [
              {
                label: 'Convenios',
                to: '/app/simbora/config/bancos',
                icon: 'lnil lnil-house',
              },
              {
                label: 'Bancos',
                to: '/app/simbora/config/bancos',
                icon: 'lnil lnil-bank',
              },
              {
                label: 'Produtos',
                to: '/app/simbora/config/produtos',
                icon: 'lnil lnil-package',
              },
              {
                label: 'SubProdutos',
                to: '/app/simbora/config/subprodutos',
                icon: 'lnil lnil-anchor',
              }
            ],
          },
        ],
      },
    }
  ]
)
</script>

<template>
  <SidebarLayout
    :links
    default-sidebar="dashboard"
  >
    <slot />

    <template #logo>
      <h3 class="is-hidden-mobile ml-2">
        My app
      </h3>
    </template>

    <template #toolbar>
      <div class="toolbar-link">
        <VDarkmodeToggle />
      </div>
    </template>
  </SidebarLayout>
</template>
