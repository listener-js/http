[@listener-js/http](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [Http](_http_.http.md)

# Class: Http

## Hierarchy

* **Http**

## Index

### Methods

* [fetch](_http_.http.md#fetch)
* [httpError](_http_.http.md#httperror)

## Methods

###  fetch

▸ **fetch**(`lid`: string[], `url`: string, `arg`: [HttpArg](../interfaces/_types_.httparg.md)): *Promise‹[HttpOutput](../interfaces/_types_.httpoutput.md)›*

Defined in http.ts:8

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lid` | string[] | - |
`url` | string | - |
`arg` | [HttpArg](../interfaces/_types_.httparg.md) |  {} |

**Returns:** *Promise‹[HttpOutput](../interfaces/_types_.httpoutput.md)›*

___

###  httpError

▸ **httpError**(`lid`: string[], `error`: string): *string*

Defined in http.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`error` | string |

**Returns:** *string*
