/**
 * @fileoverview Rule to flag comparisons to null without a type-checking
 * operator.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `null` comparisons without type-checking operators",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        return {

            BinaryExpression: function(node) {
                const badOperator = node.operator === "==" || node.operator === "!=";

                if (node.right.type === "Literal" && node.right.raw === "null" && badOperator ||
                        node.left.type === "Literal" && node.left.raw === "null" && badOperator) {
                    context.report(node, "Use ‘===’ to compare with ‘null’.");
                }
            }
        };

    }
};
