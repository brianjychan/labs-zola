import { currentURL, find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';
import { setupMirage } from 'ember-cli-mirage/test-support';
import layerGroupsFixtures from '../../mirage/static-fixtures/layer-groups';

// this is a true acceptance, just make sure it works
module('Acceptance | visit lot', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.server.post('layer-groups', () => layerGroupsFixtures);
  });

  test('visiting a lot', async function(assert) {
    this.server.create('lot', {
      id: 1016320001,
    });

    await visit('/l/lot/1/1632/1');
    await percySnapshot('lot view');

    assert.notEqual(find('.content-area').textContent.length, 0);
  });

  test('visiting a bbl', async function(assert) {
    this.server.create('lot', {
      id: 1001870021,
    });

    await visit('/bbl/1001870021');
    await percySnapshot('lot view');

    assert.equal(currentURL(), '/l/lot/1/187/21');
    assert.notEqual(find('.content-area').textContent.length, 0);
  });
});
