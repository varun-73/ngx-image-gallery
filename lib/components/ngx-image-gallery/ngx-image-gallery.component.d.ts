import { OnInit, ElementRef, Renderer2, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { GALLERY_CONF, GALLERY_IMAGE } from '../../ngx-image-gallery.conf';
import { DomSanitizer } from '@angular/platform-browser';
export declare class NgxImageGalleryComponent implements OnInit, OnChanges {
    sanitizer: DomSanitizer;
    private galleryElem;
    private renderer;
    private cdRef;
    opened: boolean;
    conf: GALLERY_CONF;
    images: GALLERY_IMAGE[];
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onImageChange: EventEmitter<any>;
    onImageClicked: EventEmitter<any>;
    onError: EventEmitter<any>;
    thumbnailsElem: ElementRef;
    /***************************************************/
    loading: boolean;
    activeImageIndex: number;
    thumbnailMargin: string;
    thumbnailsScrollerLeftMargin: string;
    get activeImage(): GALLERY_IMAGE;
    get onFirstImage(): boolean;
    get onLastImage(): boolean;
    get thumbnailsRenderParams(): {
        thumbnailsInView: number;
        newThumbnailMargin: number;
        newThumbnailSize: number;
        thumbnailsScrollerLeftMargin: any;
    };
    private setGalleryConf;
    private loadImage;
    private activateImage;
    private fitThumbnails;
    private scrollThumbnails;
    private debouncedPrev;
    private debouncedNext;
    /***************************************************/
    constructor(sanitizer: DomSanitizer, galleryElem: ElementRef, renderer: Renderer2, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onKeyboardInput(event: KeyboardEvent): void;
    onWindowResize(event: Event): void;
    /***************************************************/
    open(index?: number): void;
    close(): void;
    prev(): void;
    next(): void;
    setActiveImage(index: number): void;
    deleteImage(index: number): void;
    mouseWheelUp(): void;
    mouseWheelDown(): void;
    clickOnImage(index: number): void;
    rightClickOnImage(event: Event): boolean;
}
