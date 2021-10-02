var paginate = {
    items: {},
    tag: null,
    totalPages: 1, // تعداد صفحات ما هستش
    currentPage: 0, // صفحه جاری ما هستش
    perPage: 6,
    createPagination: function () {
        this.totalPages = Math.ceil(this.items.length / this.perPage) // 18 / 6 = 3

        var pagination = $('<ul class="c-ui-paginator__control"></ul>').append('<li class="c-ui-paginator__control-item"><a class="pager c-ui-paginator__control-prev c-ui-paginator__control-prev--disabled" data-name="prev"></a></li>');

        for (var i = 0; i < this.totalPages; i++) {
            // console.log(i); // 0 1 2
            var pageElClass = "c-ui-paginator__control-digit";
            if (i == 0) {
                pageElClass = "c-ui-paginator__control-digit c-ui-paginator__control-digit--current";
            }
            var pageEl = '<li class="c-ui-paginator__control-item"><a class="' + pageElClass + '" data-page="' + (i + 1) + '">' + (i + 1) + '</a></li>';
            pagination.append(pageEl);
        }

        pagination.append('<li class="c-ui-paginator__control-item"><a class="pager c-ui-paginator__control-next" data-name="next"></a></li>');
        this.tag.after(pagination);
        var ___this = this;
        $('.pager').on('click', function () {
            // console.log($(this));
            ___this.pager($(this).data('name'));
        });
        $('.c-ui-paginator__control-digit').on('click', function () {
            ___this.goToPage($(this).data('page'));
        })

    },
    updatePagination: function () {
        $('.c-ui-paginator__control .c-ui-paginator__control-item .c-ui-paginator__control-digit').removeClass('c-ui-paginator__control-digit--current');
        $('.c-ui-paginator__control .c-ui-paginator__control-item .c-ui-paginator__control-digit[data-page="' + (this.currentPage + 1) + '"]').addClass('c-ui-paginator__control-digit--current');
    },
    pager: function (name) {
        $('.pagination .pager').removeClass('disabled');
        switch (name) {
            case 'next':
                this.currentPage++;
                console.log('CurrentPage ++ Pager => ' + this.currentPage);
                if (this.currentPage >= (this.totalPages - 1)) {
                    this.currentPage = (this.totalPages - 1);
                    $('.c-ui-paginator__control .c-ui-paginator__control-item .c-ui-paginator__control-next').addClass('c-ui-paginator__control-prev--disabled');
                }
                break;
            case 'prev':
                this.currentPage--;
                console.log('CurrentPage -- Pager => ' + this.currentPage);
                if (this.currentPage <= 0) {
                    this.currentPage = 0;
                    $('.c-ui-paginator__control .c-ui-paginator__control-item .c-ui-paginator__control-prev').addClass('c-ui-paginator__control-prev--disabled');
                }
                break;


        }
        this.showItems();
    },
    goToPage: function (page) {
        // alert(page -1);
        this.currentPage = page - 1;
        $('.c-ui-paginator__control .c-ui-paginator__control-item .pager').removeClass('c-ui-paginator__control-prev--disabled');
        if (this.currentPage >= (this.totalPages - 1)) {
            this.currentPage = (this.totalPages - 1);
            $('.c-ui-paginator__control .c-ui-paginator__control-item .pager.c-ui-paginator__control-next').addClass('c-ui-paginator__control-prev--disabled');
        }
        if (this.currentPage <= 0) {
            this.currentPage = 0;
            $('.c-ui-paginator__control .c-ui-paginator__control-item .pager.c-ui-paginator__control-prev').addClass('c-ui-paginator__control-prev--disabled');
        }
        this.showItems();
    },
    showItems: function () {
        this.items.hide();
        var calc = this.perPage * this.currentPage;

        this.items.slice(calc, calc + this.perPage).show();

        this.updatePagination();
    },
    init: function (tag, items, perPage) {
        this.tag = tag;
        this.items = items;
        this.perPage = perPage;
        this.totalPages = 1;
        this.currentPage = 0;
        this.createPagination();
        this.showItems();
    },
}

jQuery.fn.Pagination = function (perPage, itemSelector) {
    var __this = $(this);
    // console.log(__this);
    var items = $(itemSelector);
    // console.log(items);
    if (isNaN(perPage) || perPage === undefined) {
        perPage = 1;
    }
    if (items.length <= perPage) {
        return true;
    }
    paginate.init(__this, items, perPage)
}
$('.ui--pagination').Pagination(6, '.ui-table--row-gruop');
$('.ui--pagination').Pagination(8, 'table tr');
