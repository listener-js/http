[@listener-js/http](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [Http](_http_.http.md)

# Class: Http

## Hierarchy

* **Http**

## Index

### Properties

* [listeners](_http_.http.md#listeners)

### Methods

* [fetch](_http_.http.md#fetch)
* [httpError](_http_.http.md#httperror)

## Properties

###  listeners

• **listeners**: *string[]* =  ["fetch", "httpError"]

Defined in http.ts:8

## Methods

###  fetch

▸ **fetch**(`id`: string[], `url`: string, `arg`: [HttpArg](../interfaces/_types_.httparg.md)): *Promise‹[HttpOutput](../interfaces/_types_.httpoutput.md)›*

Defined in http.ts:10

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string[] | - |
`url` | string | - |
`arg` | [HttpArg](../interfaces/_types_.httparg.md) |  {} |

**Returns:** *Promise‹[HttpOutput](../interfaces/_types_.httpoutput.md)›*

___

###  httpError

▸ **httpError**(`id`: string[], `error`: string): *string*

Defined in http.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`error` | string |

**Returns:** *string*
