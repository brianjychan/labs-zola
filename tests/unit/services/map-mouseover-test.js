import { moduleFor, test } from 'ember-qunit';

moduleFor('service:map-mouseover', 'Unit | Service | map mouseover', {
  // Specify the other units that are required for this test.
  needs: ['service:registeredLayers']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
