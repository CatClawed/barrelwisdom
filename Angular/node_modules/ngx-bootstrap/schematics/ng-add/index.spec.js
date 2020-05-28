"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@schematics/angular/utility/test");
const testing_1 = require("@angular-devkit/schematics/testing");
const config_1 = require("@schematics/angular/utility/config");
const utils_1 = require("../utils");
const path = require("path");
describe('ng-add schematic', () => {
    let runner;
    let appTree;
    beforeEach(done => {
        runner = new testing_1.SchematicTestRunner('schematics', path.join(__dirname, '../collection.json'));
        utils_1.createTestApp(runner)
            .subscribe((tree) => {
            appTree = tree;
            done();
        });
    });
    it('should update package.json', done => {
        utils_1.removePackageJsonDependency(appTree, 'bootstrap');
        runner.runSchematicAsync('ng-add', {}, appTree)
            .subscribe(tree => {
            const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
            const dependencies = packageJson.dependencies;
            expect(dependencies.bootstrap).toBeDefined();
            expect(dependencies['ngx-bootstrap']).toBeDefined();
            expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort(), 'Expected the modified "dependencies" to be sorted alphabetically.');
            done();
        }, done.fail);
    });
    it('should add bootstrap style', done => {
        runner.runSchematicAsync('ng-add', {}, appTree)
            .subscribe(tree => {
            const workspace = config_1.getWorkspace(tree);
            const project = utils_1.getProjectFromWorkspace(workspace);
            utils_1.expectProjectStyleFile(project, './node_modules/bootstrap/dist/css/bootstrap.min.css');
            done();
        }, done.fail);
    });
});
//# sourceMappingURL=index.spec.js.map