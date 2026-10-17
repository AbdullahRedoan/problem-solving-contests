function getPageMetadata(totalItems, pageSize, currentPage) {
    if (totalItems === 0) {
        return ({ endItem :0 , hasNext : false, hasPrev:false, startItem : 0, totalPages: 0 })
    }
    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = (currentPage - 1) * pageSize + 1
    const endItem = Math.min(currentPage * pageSize, totalItems)
    let hasPrev = currentPage > 1;
    let hasNext = currentPage < totalPages;
    return ({ endItem, hasNext, hasPrev, startItem, totalPages })
}

console.log(getPageMetadata(95, 10, 10));




// Input: totalItems = 24, pageSize = 5, currentPage = 3

// Output: {"endItem":15,"hasNext":true,"hasPrev":true,"startItem":11,"totalPages":5}