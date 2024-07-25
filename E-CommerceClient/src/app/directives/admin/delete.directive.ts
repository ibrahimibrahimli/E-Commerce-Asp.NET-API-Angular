import { outputAst } from '@angular/compiler';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $: any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    public dialog: MatDialog
  ) {
    const img = _renderer.createElement("img")
    img.setAttribute("src", "../../../../../assets/images/delete.png")
    img.setAttribute("style", "cursor: pointer;")
    img.width = 25;

    _renderer.appendChild(element.nativeElement, img)
  }

  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClick() {
    this.openDialog(async () => {
      const td: HTMLTableCellElement = this.element.nativeElement;
      await this.httpClientService.delete({
        controller : this.controller
      },this.id).subscribe(data =>{
        $(td.parentElement).animate({
          opacity: 0,
          left: "+=50",
          height: "toogle"
        }, 1000, () => {
          this.callback.emit();
        })
      })
    });

  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "250px",
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes) {
        afterClosed()
      }
    });
  }

}
