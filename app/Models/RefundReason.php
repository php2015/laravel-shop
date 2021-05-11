<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\RefundReason
 *
 * @property int $id 主键
 * @property string|null $title 标题
 * @property int|null $displayorder 显示顺序
 * @method static Builder|RefundReason newModelQuery()
 * @method static Builder|RefundReason newQuery()
 * @method static Builder|RefundReason query()
 * @method static Builder|RefundReason whereDisplayorder($value)
 * @method static Builder|RefundReason whereId($value)
 * @method static Builder|RefundReason whereTitle($value)
 * @mixin \Eloquent
 */
class RefundReason extends Model
{
    protected $table = 'refund_reason';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'displayorder'];
    protected $casts = [
        'displayorder' => 'integer'
    ];

    public $timestamps = false;

    public static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::addGlobalScope('sort', function (Builder $builder) {
            return $builder->orderBy('displayorder')->orderBy('id');
        });
    }
}
