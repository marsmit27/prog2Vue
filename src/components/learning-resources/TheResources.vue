<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >Les pronostics</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Ajouter un pronostic</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'FC SÉVILLE - CELTA VIGO',
          description: 'Côté sévillan, le latéral droit Navas a été rejoint à linfirmerie par la pépite Fernandes. En revanche, la recrue estivale Idrissi, lailier Suso, et le redoutable attaquant En-Nesyri, auteur dun doublé lors du dernier match de C1 contre Krasnodar, sont tous de retour. Très bon lan dernier, lancien Marseillais Ocampos a enfin débloqué son compteur avant la trêve en transformant un penalty. Le Celta Vigo est encore privé du gardien remplaçant Sergio Alvarez, du milieu international turc Mor et du défenseur pas encore utilisé cette saison Kevin Vasquez.Offensivement, le Celta Vigo sappuie énormément sur son attaquant expérimenté Iago Aspas qui a inscrit 4 des 6 buts marqués par son équipe depuis le début de la saison. Avantage FC Séville sur le papier',
          cote: '1,70',
        },
        {
          id: 'google',
          title: 'MANCHESTER UNITED - WEST BROMWICH',
          description: 'West Bromwich doit toujours faire sans le milieu remplaçant Field et lattaquant international gallois Robson-Kanu, blessés. De plus, quelques éléments positifs au covid dont le nom na pas filtré sont incertains. Avec 17 buts encaissés, le promu dispose de la plus mauvaise défense du championnat. Léquipe na trouvé le chemin des filets quà une seule reprise lors des 5 derniers matchs. Avantage Manchester United sur le papier',
          cote: '2,2',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, cote) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        cote: cote,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>