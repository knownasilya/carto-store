import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Project ${i}`;
  },

  afterCreate(project, /*server*/) {
    project.createLayer({
      name: 'Layer Europe',
      css: `#layer {
        marker-width: 7;
        marker-fill: #EE4D5A;
        marker-line-color: #FFFFFF;
      }`,
      sql: 'SELECT * FROM ne_10m_populated_places_simple WHERE adm0name IN (SELECT admin FROM ne_adm0_europe)'
    });
  }
});